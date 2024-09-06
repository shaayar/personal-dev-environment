import React from "react";

function Diary() {
  return (	<section className="flex flex-col justify-center items-center "> 
  <h1 classNameName="w-full text-center font-bold text-2xl mt-5">Diary</h1> 
  <div className="flex-box"> 
    <div className="row"> 
      <div className="col">
        <button type="button"
            onclick="f1()"
            className=" shadow-sm btn btn-outline-secondary"
            data-toggle="tooltip"
            data-placement="top"
            title="Bold Text"> 
    Bold</button> 
        <button type="button"
            onclick="f2()"
            className="shadow-sm btn btn-outline-success"
            data-toggle="tooltip"
            data-placement="top"
            title="Italic Text"> 
    Italic</button> 
        <button type="button"
            onclick="f3()"
            className=" shadow-sm btn btn-outline-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Left Align"> 
    <i className="fas fa-align-left"></i></button> 
        <button type="button"
            onclick="f4()"
            className="btn shadow-sm btn-outline-secondary"
            data-toggle="tooltip"
            data-placement="top"
            title="Center Align"> 
    <i className="fas fa-align-center"></i></button> 
        <button type="button"
            onclick="f5()"
            className="btn shadow-sm btn-outline-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Right Align"> 
    <i className="fas fa-align-right"></i></button> 
        <button type="button"
            onclick="f6()"
            className="btn shadow-sm btn-outline-secondary"
            data-toggle="tooltip"
            data-placement="top"
            title="Uppercase Text"> 
    Upper Case</button> 
        <button type="button"
            onclick="f7()"
            className="btn shadow-sm btn-outline-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Lowercase Text"> 
    Lower Case</button> 
        <button type="button"
            onclick="f8()"
            className="btn shadow-sm btn-outline-primary"
            data-toggle="tooltip"
            data-placement="top"
            title="Capitalize Text"> 
    Capitalize</button> 
        <button type="button"
            onclick="f9()"
            className="btn shadow-sm btn-outline-primary side"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"> 
    Clear Text</button> 
      </div> 
    </div> 
  </div> 
  <br /> 
  <div className="row"> 
    <div className="col-md-3 col-sm-3"> 
    </div> 
    <div className="col-md-6 col-sm-9"> 
      <div className="flex-box"> 
        <textarea id="textarea1"
            className="input shadow"
            name="name"
            rows="15"
            cols="100"
            placeholder="Your text here "> 
        </textarea> 
      </div> 
    </div> 
    <div className="col-md-3"> 
    </div> 
  </div> 
</section> );
}

export default Diary;
