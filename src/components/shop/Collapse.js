import React from "react";

const Collapse = () => {
    const contentsCollapseCatagory = ["Áo tay ngắn", "Áo tay dài", "Quần ngắn", "Quần dài", "Váy"];
    const ObjSortingByPrice = ['Tăng dần', 'Giảm dần']
    const ObjSortingByName = ['A-Z', 'Z-A']
    const titlesCollapse = ["Loại sản phẩm", "Sắp xếp theo giá", "Sắp xếp theo tên"];


    const mapElementsInCollapse = (object)=> {
         return object.map((item, index) => {
              return <div className="card-body collapse-content" key={index}>
              {" "}
              {item}{" "}
          </div>
         })
    }

    const titlesCollapseMap = titlesCollapse.map((item, index) => {
        return (
            <div className="card" key={index}>
                <div
                    className="card-header"
                    role="tab"
                    id={`section${index}HeaderId`}
                    data-toggle="collapse"
                    data-parent="#accordianId"
                    aria-expanded="true"
                    aria-controls={`section${index}ContentId`}
                    href={`#section${index}ContentId`}
                >
                    <h3 className="m-3">{item}</h3>
                </div>
                <div
                    id={`section${index}ContentId`}
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby={`section${index}HeaderId`}
                >
                    {index === 0 && mapElementsInCollapse(contentsCollapseCatagory)}
                    {index === 1 && mapElementsInCollapse(ObjSortingByPrice)}
                    {index === 2 && mapElementsInCollapse(ObjSortingByName)}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-5">
            <div id="accordianId" role="tablist" aria-multiselectable="true">
                {titlesCollapseMap}
            </div>
        </div>
    );
};

export default Collapse;
