import React from "react";
import Border from "../images/Border.svg";
import NewsletterArrow from "../images/NewsletterArrow.svg";
import {
  NewletterContainer,
  BlogHeader as NewsletterHeader,
  NewsLetterText,
  NewsletterInput,
  NewsletterBtn,
} from "../styles";
function NewsLetter() {
  return (
    <NewletterContainer>
      <img src={Border} />
      <NewsletterHeader>Join the Newletter</NewsletterHeader>
      <NewsLetterText>
        <p>
          You’ll receive an email every once in a while about new products,
          courses, and videos!
        </p>
        <div style={{ display: "flex" }}>
          <NewsletterInput placeholder="name@example.com" />
          <NewsletterBtn>
            <img src={NewsletterArrow} />
          </NewsletterBtn>
        </div>
      </NewsLetterText>
    </NewletterContainer>
  );
}

export default NewsLetter;
