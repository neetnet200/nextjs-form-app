import { useRouter } from "next/router";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Image
      src="/main_image_mobile.png" 
      alt="coffee beans" 
      width={1900} 
      height={800}
      
      />
      <div className="container">
        <div className="row">
          <div>
            <Image
            src="/mobile_heading.png"
            alt="heading text"  
            width={360} 
            height={360} />
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
