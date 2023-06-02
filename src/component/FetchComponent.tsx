import React, { useState, useEffect } from "react";

const FetchComponent: React.FC = () => {
  const [countdownValue, setCountdownValue] = useState<number>(51);

  useEffect(() => {
    if (countdownValue > 0) {
      const timer = setTimeout(() => {
        setCountdownValue(countdownValue - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdownValue]);
  return (
    <div className="bg-black">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="badge badge-info gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        info
      </div>
      <div className="badge badge-success gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        success
      </div>
      <div className="badge badge-warning gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        warning
      </div>
      <div className="badge badge-error gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        error
      </div>
      <button className="btn btn-outline">Button</button>
      <button className="btn btn-outline btn-primary">Button</button>
      <button className="btn btn-outline btn-secondary">Button</button>
      <button className="btn btn-outline btn-accent">Button</button>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full bg-primary flex items-center justify-center ">
          <p className="text-5xl">VERTICAL SWIPE</p>
        </div>

        <div className="carousel-item h-full bg-secondary">
          <p>world</p>
        </div>
        <div className="carousel-item h-full bg-success">
          <p>!</p>
        </div>
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <div
          tabIndex={0}
          className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
        >
          <div className="card-body">
            <h3 className="card-title">Card title!</h3>
            <p>you can use any element as a dropdown.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchComponent;
