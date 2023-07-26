import React from 'react'
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from 'react-bootstrap';
const Home = () => {
    const SignupSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(4, "Too Short!")
            .max(30, "Too Long!")
            .required("Required...!"),
        applicationfor: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required...!"),
        resume: Yup.string()
            .required("Required...!"),
        about: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required...!"),
        ExperienceLevel: Yup.string()
            .required("Required...!"),
        contact: Yup.string()
            .matches(/[6-9]{1}[0-9 ]{4}[0-9 ]{5}/, {
                message: "Invalid Indian number",
                // excludeEmptyString: false,
            })
            .required('Required.......'),
        email: Yup.string().email("Invalid email").required("Required...!"),
    });
  return (
  
      <div className="d-flex align-items-center flex-column w-50 border  m-auto shadow-lg p-3 mb-5 bg-body rounded">
          <div className=''>
              <h3 className="text-center">
                  Applicant Information
              </h3>
              <p className="text-center">
                  Personal details and application.
              </p>
        </div>
           
                   
           
                <Formik
                    initialValues={{
                        fullname: "",
                        applicationfor: "",
                        email: "",
                        resume: "",
                        about: "",
                        ExperienceLevel: "",
                        contact: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        setFieldValue,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                      <div className="align-items-center w-100">
                                <dl>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Full name:
                                        </dt>
                                        <dd >
                                            <input
                                          className="w-100"
                                                type="text"
                                                name="fullname"
                                                id="fullname"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.fullname}
                                            />
                                            <span className="text-red-500">
                                                {errors.fullname && touched.fullname && errors.fullname}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Application for:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <input
                                          className="w-100"
                                                type="text"
                                                name="applicationfor"
                                                id="applicationfor"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.applicationfor}
                                            />
                                            <span className="text-red-500">
                                                {errors.applicationfor &&
                                                    touched.applicationfor &&
                                                    errors.applicationfor}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Email address:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <input
                                          className="w-100"
                                                type="text"
                                                name="email"
                                                id="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <span className="text-red-500">
                                                {errors.email && touched.email && errors.email}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Contact No:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <input
                                          className="w-100"
                                                type="tel"
                                                name="contact"
                                                id="contact"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.contact}
                                                maxLength={10}
                                            />
                                            <span className="text-red-500">
                                                {errors.contact && touched.contact && errors.contact}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            About:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <textarea
                                          className="w-100"
                                                rows={5}
                                                type="text"
                                                name="about"
                                                id="about"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.about}
                                            />
                                            <span className="text-red-500">
                                                {errors.about && touched.about && errors.about}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Attachments:
                                        </dt>
                                        <dd className="">
                                            <ul
                                                role="list"
                                                className=""
                                            >
                                                <li className="">
                                                    <div className="">
                                                 
                                                        <div className="">
                                                            <input
                                                                type="file"
                                                                name="resume"
                                                                id="resume"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.resume}
                                                                accept="docx/pdf"
                                                            />
                                                        </div>
                                                    </div>

                                                            </li>
                                            </ul>
                                            <span className="text-red-500">
                                                {errors.resume && touched.resume && errors.resume}
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">
                                            Experience Level:
                                        </dt>
                                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <div className="flex-1 flex justify-around">
                                                <div className="flex-1 flex gap-3">
                                                    <input
                                                        type="radio"
                                                        name="ExperienceLevel"
                                                        id="ExperienceLevel"
                                                        value='Fresher'
                                                        checked={values.ExperienceLevel === "Fresher"}
                                                        onChange={() => setFieldValue("ExperienceLevel", "Fresher")}
                                                    />
                                                    <label htmlFor="Fresher">Fresher</label>
                                                </div>
                                                <div className="flex-1 flex gap-3">
                                                    <input
                                                        type="radio"
                                                        name="ExperienceLevel"
                                                        id="ExperienceLevel"
                                                        value="Experienced"
                                                        checked={values.ExperienceLevel === "Experienced"}
                                                        onChange={() => setFieldValue("ExperienceLevel", "Experienced")}

                                                    />
                                                    <label htmlFor="Experienced">Experienced</label>
                                                </div>
                                            </div>
                                            <span className="text-red-500">
                                                {errors.ExperienceLevel &&
                                                    touched.ExperienceLevel &&
                                                    errors.ExperienceLevel}
                                            </span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button
                              className="w-75 m-auto d-flex align-items-center justify-content-center"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            
        </div>
    );
  
}

export default Home