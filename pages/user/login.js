import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const SignInForm = dynamic(() => import("../../components/account/SignInForm"), {
ssr: false, // Set ssr to false to prevent server-side rendering
});

function SignInView() {
const [showForm, setShowForm] = useState(false);

const onSubmit = async (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  console.log(email?.value, password?.value);
  const body = {
    email : email?.value,
    password: password?.value
  }
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  console.log(data);
   
};

const handleScroll = () => {
if (window.scrollY > 500) {
setShowForm(true);
}
};

// Add scroll event listener to trigger lazy loading of SignInForm
React.useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
<div className="container my-3">
<div className="row border">
<div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
<Link href="/">
<img
           src="/images/banner/Dell.webp"
           alt="..."
           className="img-fluid"
         />
</Link>
<Link href="/">
<img
           src="/images/banner/Laptops.webp"
           alt="..."
           className="img-fluid"
         />
</Link>
</div>
<div className="col-md-6 p-3">
<h4 className="text-center">Sign In</h4>
 <SignInForm onSubmit={onSubmit} />
</div>
</div>
</div>
);
}

export default SignInView;