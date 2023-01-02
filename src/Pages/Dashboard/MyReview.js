import React from 'react';
import { useForm } from "react-hook-form";

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:4000/review`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => {
                console.log(result)
                reset()
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Enter Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description",
                            {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                    />
                    <label className="label">
                        {errors.info?.type === 'required' && <span className="label-text-alt text-red-500">{errors.info.message}</span>}
                    </label>
                </div>

                <input className="btn btn-primary text-base-100 normal-case rounded-none hover:bg-base-100 hover:text-primary w-full max-w-xs" type="submit" value='Submit' />

            </form>
        </div>
    );
};

export default MyReview;