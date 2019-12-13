import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = () => {

	return (
		<div className="form form-user">
			<form>
				<label htmlFor="name">Name:
					<Field
						type="text"
						id="name"
					/>
				</label><br />
				<label htmlFor="email">E-mail:
					<Field
						type="text"
						id="email"
					/>
				</label><br />
				<label htmlFor="password">Password:
					<Field
						type="text"
						id="password"
					/>
				</label><br />
				<label className="checkbox-container">
					Terms of Service
					<Field
						type="checkbox"
						name="tos"
						/>
					<span className="check-mark" />
				</label><br />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
};

export default UserForm;