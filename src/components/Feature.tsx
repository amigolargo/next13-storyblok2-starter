import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }: any) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name + ' foo'}
  </div>
);
 
export default Feature;