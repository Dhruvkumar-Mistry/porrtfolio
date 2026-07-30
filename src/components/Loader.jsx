import { useEffect, useState } from "react";

const Loader = () => {
  const [hideLoader, setHideLoader] = useState(false);
  useEffect(() => {

    const timer = setTimeout(() => {

      setHideLoader(true);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>

      {
        !hideLoader &&

        <div className="loader-wrapper">

          {/* BACKGROUND GLOW */}

          <div className="loader-glow one"></div>
          <div className="loader-glow two"></div>

          {/* GRID */}

          <div className="loader-grid"></div>

          {/* CENTER CONTENT */}

          <div className="loader-content">

            <span className="loader-small-text">
              FRONTEND DEVELOPER
            </span>

            <h1 className="loader-title">
              Dhruv
              <span> Mistry</span>
            </h1>

            <p className="loader-desc">
              Crafting Modern Web Experiences
            </p>

            {/* LINE */}

            <div className="loader-line">
              <span></span>
            </div>

          </div>

          {/* BOTTOM TEXT */}

          <div className="loader-bottom-text">
            Loading Portfolio...
          </div>

        </div>

      }
    </>
  )
}

export default Loader