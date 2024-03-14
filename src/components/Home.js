import React from "react";

function Home() {
  return (
    <main
      id="main"
      className="grid-container grid-container--home box"
      // style="max-width: 60rem;"
    >
      <div>
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 d-block">
          So, you want to travel to
          <span class="fs-900 uppercase ff-serif text-accent d-block">
            Space
          </span>
        </h1>
        <p class="text-white">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div>
        <a
          href="#"
          className="large-button uppercase ff-sans-cond fs-600 text-dark bg-white"
        >
          Explore
        </a>
      </div>
    </main>
  );
}

export default Home;
