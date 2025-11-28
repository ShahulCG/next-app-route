import React from "react";

interface SSG {
  title: string;
}
export const SsgPage = (props: any) => {
    return (
        <div>
            <h1>This is Profile page{`${props?.title}`}</h1>
        </div>
    )
}
export const revalidate = 60;
// SSG
// export async function generateStaticParams() {
//   // Fetch data from an external API or database
//   // const res = await fetch('https://api.example.com/dynamic-data');
//   const data1 = await {title: 'SSG'}; //res.json();

//   return {
//     props: data1,
//   };
// }

export default SsgPage;