"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";

export default function Login({ onVisibilityChange }) {
    const [visibleRight, setVisibleRight] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [showErrors, setShowErrors] = useState(false); // Control when to show errors

    const validate = (data) => {
        let errors = {};

        if (!data.name) {
            errors.name = "Name is required.";
        }

        if (!data.email) {
            errors.email = "Email is required.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = "Invalid email address. E.g. example@email.com";
        }

        if (!data.password) {
            errors.password = "Password is required.";
        }

        if (!data.accept) {
            errors.accept = "You need to agree to the terms and conditions.";
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);
        form.restart();
        setShowErrors(false); // Reset error visibility
    };

    const isFormFieldValid = (meta) => showErrors && !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return (
            isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
        );
    };

    const dialogFooter = (
        <div className="flex justify-content-center">
            <Button
                label="OK"
                className="p-button-text"
                autoFocus
                onClick={() => setShowMessage(false)}
            />
        </div>
    );

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    const handleMouseEnter = () => {
        setVisibleRight(true);
        onVisibilityChange(true);
    };

    const handleMouseLeave = () => {
        setVisibleRight(false);
        onVisibilityChange(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            className={`fixed top-0 right-0 transition-all duration-300 h-full ${
                visibleRight ? "w-[350px]" : "w-[40px]"
            } shadow-md`}
        >
            {/* Arrow on the visible edge */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1">
                <i
                    onClick={handleMouseLeave}
                    className={`pi ${
                        visibleRight
                            ? "pi-angle-right text-primary"
                            : "pi-angle-left text-primary"
                    } text-xl cursor-pointer`}
                ></i>
            </div>

            {/* Login Form */}
            <div
                className={`h-full transition-opacity duration-300 w-full flex flex-col justify-center items-center ${
                    visibleRight ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <Dialog
                    visible={showMessage}
                    onHide={() => setShowMessage(false)}
                    position="top"
                    footer={dialogFooter}
                    showHeader={false}
                    breakpoints={{ "960px": "80vw" }}
                    style={{ width: "30vw" }}
                >
                    <div className="flex align-items-center flex-col pt-6 px-3">
                        <i
                            className="pi pi-check-circle text-primary text-4xl mb-4"
                            
                        ></i>
                        <h5 className="text-2xl mb-3">Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
                            Your account is registered under name <b>{formData.name}</b>; it'll
                            be valid for the next 30 days without activation. Please check{" "}
                            <b>{formData.email}</b> for activation instructions.
                        </p>
                    </div>
                </Dialog>

                <div className="flex justify-content-center w-full">
                    <div className="card p-6">
                        <h5 className="text-center mb-5 font-bold text-3xl">Register</h5>
                        <Form
                            onSubmit={onSubmit}
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                date: null,
                                accept: false,
                            }}
                            validate={validate}
                            render={({ handleSubmit }) => (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setShowErrors(true);
                                        handleSubmit(e);
                                    }}
                                    className="p-fluid"
                                >
                                    <Field
                                        name="name"
                                        render={({ input, meta }) => (
                                            <div className="field mb-5">
                                                <span className="p-float-label">
                                                    <InputText
                                                        id="name"
                                                        {...input}
                                                        autoFocus
                                                        className={classNames("p-inputtext-sm w-full border border-primary rounded-md p-1", {
                                                            "p-invalid": isFormFieldValid(meta),
                                                        })}
                                                    />
                                                    <label
                                                        htmlFor="name"
                                                        className={classNames({
                                                            "p-error": isFormFieldValid(meta),
                                                        })}
                                                    >
                                                        Name*
                                                    </label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )}
                                    />
                                    <Field
                                        name="email"
                                        render={({ input, meta }) => (
                                            <div className="field mb-5">
                                                <span className="p-float-label">
                                                    <InputText
                                                        id="email"
                                                        {...input}
                                                        className={classNames("p-inputtext-sm w-full border border-primary rounded-md p-1", {
                                                            "p-invalid": isFormFieldValid(meta),
                                                        })}
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className={classNames({
                                                            "p-error": isFormFieldValid(meta),
                                                        })}
                                                    >
                                                        Email*
                                                    </label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )}
                                    />
                                    <Field
                                        name="password"
                                        render={({ input, meta }) => (
                                            <div className="field mb-5">
                                                <span className="p-float-label">
                                                    <Password
                                                        id="password"
                                                        {...input}
                                                        toggleMask
                                                        className={classNames("w-full border border-primary rounded-md p-1", {
                                                            "p-invalid": isFormFieldValid(meta),
                                                        })}
                                                        header={passwordHeader}
                                                        footer={passwordFooter}
                                                    />
                                                    <label
                                                        htmlFor="password"
                                                        className={classNames({
                                                            "p-error": isFormFieldValid(meta),
                                                        })}
                                                    >
                                                        Password*
                                                    </label>
                                                </span>
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )}
                                    />
                                    <Field
                                        name="accept"
                                        type="checkbox"
                                        render={({ input, meta }) => (
                                            <div className="field-checkbox">
                                                <Checkbox
                                                    inputId="accept"
                                                    {...input}
                                                    className={classNames("h-full border rounded-lg border-primary", {
                                                        "p-invalid": isFormFieldValid(meta),
                                                    })}
                                                />
                                                <label
                                                    htmlFor="accept"
                                                    className={classNames({
                                                        "p-error": isFormFieldValid(meta),
                                                    })}
                                                >
                                                    I agree to the terms and conditions*
                                                </label>
                                            </div>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        label="Submit"
                                        className="mt-2 p-button py-2 w-full bg-primary hover:bg-primary-dark"
                                    />
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
