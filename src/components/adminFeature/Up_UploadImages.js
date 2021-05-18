import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { storage } from "../../firebase/index";

import { setImagesForUpdate } from "../../redux/actions/actAdmin";
const Up_UploadImages = ({ imagesUrl }) => {
    const dispatch = useDispatch();

    const [imgs, setimgs] = useState(null);
    const [progressLoadImg, setprogressLoadImg] = useState(0);
    const [urlImages, seturlImages] = useState([]);
    const [imgShowing, setimgShowing] = useState([]);
    const [imageLoading, setimageLoading] = useState(false);
    useEffect(() => {
        if(imagesUrl !== undefined)
            dispatch(setImagesForUpdate(imagesUrl));
    }, [imagesUrl]);

    const inputHandle = (event) => {
        const imgs = event.target.files; //1 file
        if (imgs) {
            let arr = [...imgs];
            setimgs(arr);
        }
    };
    

    const showCurrentImage = () => {
        if(imagesUrl === undefined || urlImages.length > 0)
            return imgShowing;
        
            if(imagesUrl !== undefined && imagesUrl.length > 0)
            return imagesUrl[0].url
     
    };


    const uploadImgHandle = async () => {
        let tempImages = [];
        setimgShowing([]);
        if (imgs) {
            console.log(imgs.length);
            await imgs.forEach((el) => {
                setimageLoading(true);
                const uploadTask = storage.ref(`images/${el.name}`).put(el);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setprogressLoadImg(progress);
                        console.log(progress);
                    },
                    (err) => {
                        console.log(err);
                    },
                    () => {
                        storage
                            .ref(`images`)
                            .child(el.name)
                            .getDownloadURL()
                            .then((url) => {
                                tempImages.push({ url });
                                setimgShowing([url]);
                                   if(tempImages.length === imgs.length) {
                                        dispatch(setImagesForUpdate(tempImages))
                                   }
                            });
                    }
                );
            });
            seturlImages(tempImages);
        }
    };

    return (
        <div className="add-product-left-container">
            {imageLoading && <progress className="text-success" value={progressLoadImg} max={100} />}
            <div>
                <img src={showCurrentImage()} alt="image" className="add-product-left-img" />
            </div>
            <div className="form-group ">
                <input type="file" className="form-control-file" multiple onChange={inputHandle} />
            </div>
            <button className="btn btn-success" onClick={() => uploadImgHandle()}>
                Đăng tải
            </button>
        </div>
    );
};

export default Up_UploadImages;
