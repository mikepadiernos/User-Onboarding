import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status }) => {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		status && setUsers(users => [...users, status]);
	}, [status]);

	return (
		<div className="form form-user">
			<Form>
				<label htmlFor="name">Name:
					<Field
						type="text"
						id="name"
						name="name"
						placeholder=""
					/>
					{touched.name && errors.name && (
						<p className="errors">{errors.name}</p>
					)}
				</label><br />
				<label htmlFor="email">E-mail:
					<Field
						type="text"
						id="email"
						name="email"
						placeholder=""
					/>
					{touched.email && errors.email && (
						<p className="errors">{errors.email}</p>
					)}
				</label><br />
				<label htmlFor="password">Password:
					<Field
						type="password"
						id="password"
						name="password"
					/>
					{touched.password && errors.password && (
						<p className="errors">{errors.password}</p>
					)}
				</label><br />
				<Field
					as="textarea"
					type="text"
					name="notes"
					placeholder="Notes"
				/><br />
				<label className="checkbox-container">
					Terms of Service
					<Field
						type="checkbox"
						name="tos"
						/>
					<span className="check-mark" />
				</label><br />
				<button type="submit">Submit</button>
			</Form>
			{users.map(user => {
				return (
					<article key={user.id}>
						<h2>Name: {user.species}</h2>
						<p>E-mail: {user.size}</p>
					</article>
				)}
			)}
		</div>
	)
};

const FormikUserForm = withFormik({

	mapPropsToValues(props) {
		return {
			name: props.name || "",
			email: props.email || "",
			password: props.password || "",
			notes: props.notes || "",
			tos: props.tos || false
		};
	},

	validationSchema: Yup.object().shape({
		password: Yup.string().required(),
		tos: Yup.string().required("You must agree to the Terms of Service!")
	}),


}) (UserForm);

export default FormikUserForm;