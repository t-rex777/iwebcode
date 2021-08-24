import React from "react";
import { BlogContainer, BlogHeader, BlogItem } from "../styles";
import SideArrow from "../images/SideArrow.svg";

function Blog() {
  return (
    <div id="other">
      <BlogHeader>Recent Blogs</BlogHeader>
      <BlogContainer>
        <BlogItem>
          <p>
            Competition: win a N02 Recycle counter chair by Nendo for Fritz
            Hansen
          </p>
          <p>24.09.21</p>
          <span>
            See Now <img src={SideArrow} />
          </span>
        </BlogItem>
        <BlogItem borderLeft={true} borderRight={true}>
          <p>The ULTIMATE Figma UI Kit (Tailwind-Figma) </p>
          <p>24.09.21</p>
          <span>
            See Now <img src={SideArrow} />
          </span>
        </BlogItem>
        <BlogItem>
          <p>The Pros and Cons of a Logo without scaling possibilities.</p>
          <p>24.09.21</p>

          <span>
            See Now <img src={SideArrow} />
          </span>
        </BlogItem>
      </BlogContainer>
    </div>
  );
}

export default Blog;
