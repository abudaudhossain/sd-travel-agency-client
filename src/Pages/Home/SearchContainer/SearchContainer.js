import React from 'react';
import { useForm } from "react-hook-form";

import { useHistory } from 'react-router-dom';
import "./SearchContainer.css";

const SearchContainer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const  history= useHistory();
    const onSubmit = data => {
        // console.log(data)
        history.push(`/packages/${data.location}`);
    };
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("location", { required: true })} placeholder="Enter Location ..." />
                <input type="date" {...register("SetDate", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <select {...register("category")}>
                    <option selected>Category Selected</option>
                    <option value="female">Holiday</option>
                    <option value="male">SummerVacation</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" value="Search Package" />
            </form>
        </div>
    );
};

export default SearchContainer;