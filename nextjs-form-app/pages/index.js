import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <img src={`/main_image_mobile.png`} width="100%" height="100%" />
      <div className="container">
        <div className="row">
          <div>
            <img src={`/mobile_heading.png`} width="100%" height="100%" />
          </div>

          <div>
            <button
              className="button"
              onClick={() => {
                router.push("/multi-page-form");
              }}
            >
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
