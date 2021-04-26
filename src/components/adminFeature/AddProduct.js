import React, { useState } from "react";

import { storage } from "../../firebase/index";

const AddProduct = () => {
    const [imgs, setimgs] = useState(null);

    const inputHandle = (event) => {
        const imgs = event.target.files; //1 file
        if (imgs) {
            let arr = [...imgs];
            setimgs(arr);
        }
    };

    const uploadImgHandle = () => {
        imgs.forEach((el) => {
            const uploadTask = storage.ref(`images/${el.name}`).put(el);

            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (err) => {
                    console.log(err);
                },
                () => {
                    storage
                        .ref(`images`)
                        .child(el.name)
                        .getDownloadURL()
                        .then((url) => {
                            console.log(url);
                        });
                }
            );
        });
    };

    return (
        <div>
            thêm sản phẩm
            <div className="form-group">
                <label htmlFor=""></label>
                <input type="file" class="form-control-file" multiple onChange={inputHandle} />
            </div>
            <button className="btn btn-dark" onClick={uploadImgHandle}>
                submit
            </button>
        </div>
    );
};

export default AddProduct;
