<template>
  <div>
    <h1 class="mt-4 mb-3">Video Galery</h1>

    <div class="row">
      <div class="col">
        <!--Carousel Wrapper-->
        <div
          id="multi-item-example"
          class="carousel slide carousel-multi-item carousel-multi-item-2"
          data-ride="carousel"
        >
          <!--Controls-->
          <div class="controls-top">
            <a class="black-text" href="#multi-item-example" data-slide="prev">
              <font-awesome-icon :icon="['fas', 'angle-right']" flip="horizontal" size="5x" />
            </a>
            <a class="black-text" href="#multi-item-example" data-slide="next">
              <font-awesome-icon :icon="['fas', 'angle-left']" flip="horizontal" size="5x" />
            </a>
          </div>
          <!--/.Controls-->

          <!--Slides-->
          <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item active">
              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
            <!--/.First slide-->

            <!--Second slide-->
            <div class="carousel-item">
              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
            <!--/.Second slide-->

            <!--Third slide-->
            <div class="carousel-item">
              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(64).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(59).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(63).jpg"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
            <!--/.Third slide-->
          </div>
          <!--/.Slides-->
        </div>
        <!--/.Carousel Wrapper-->
      </div>
    </div>
    
    <!--Carousel Wrapper-->
    <div id="video-carousel-example mb-4" class="carousel slide carousel-fade" data-ride="carousel">
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="carousel-item">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="carousel-item">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <a
        class="carousel-control-prev"
        href="#video-carousel-example"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#video-carousel-example"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--Carousel Wrapper-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

@media (min-width: 768px) {
  .carousel-multi-item-2 .col-md-3 {
    float: left;
    width: 25%;
    max-width: 100%;
  }
}

.carousel-multi-item-2 .card img {
  border-radius: 2px;
}

.carousel-multi-item .controls-top {
  margin-bottom: 1.88rem;
  text-align: center;
}

.fa-5x {
  font-size: 5em;
}
</style>
