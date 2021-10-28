import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://dry-spire-84918.herokuapp.com/services/addServices', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Service added successful');
                    reset();
                }
            })

    };
    return (
        <div className="add-service">
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input type="number" {...register("time")} placeholder="Time" />
                <input {...register("img", { required: true })} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;