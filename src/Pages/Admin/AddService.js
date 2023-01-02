import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '10648aec3229dc74675c1cf409ace47d';

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success) {
                    const img = result.data.url;
                    const plans = {
                        name: data.name,
                        info: data.info,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:4000/service', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json', 
                        },
                         body: JSON.stringify(plans)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.InsertedId){
                            toast.success('Service Added Successfully')
                            reset();
                        }
                        else{
                            toast.error('Failed to add Service');
                        }
                    })
                }
            })
    }

    // const onSubmit = data => {
    //     console.log(data)
    //     const url = `http://localhost:4000/service`
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res=>res.json)
    //     .then(result =>{
    //         console.log(result)
    //     })
    // };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service Title</span>
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
                        {...register("info",
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

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img",
                            {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                    />
                    <label className="label">
                        {errors.info?.type === 'required' && <span className="label-text-alt text-red-500">{errors.info.message}</span>}
                    </label>
                </div>

                

                <input className="btn btn-primary text-base-100 normal-case rounded-none hover:bg-base-100 hover:text-primary w-full max-w-xs" type="submit" value='Add Service' />

            </form>
        </div>
    );
};

export default AddService;