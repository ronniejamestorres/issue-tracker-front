function FetchComponent() {
  return (
    <div className="bg-black">
      <div className="w-64 h-64 bg-primary">coco</div>
      <div className="w-64 h-64 bg-accent">coco</div>
      <button className="btn btn-outline">Button</button>
      <button className="btn btn-outline btn-primary">Button</button>
      <button className="btn btn-outline btn-secondary">Button</button>
      <button className="btn btn-outline btn-accent">Button</button>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full bg-primary flex items-center justify-center">
          <p className="text-5xl">VERTICAL SWIPE</p>
        </div>

        <div className="carousel-item h-full bg-secondary">
          <p>world</p>
        </div>
        <div className="carousel-item h-full bg-success">
          <p>!</p>
        </div>
      </div>
    </div>
  );
}

export default FetchComponent;
