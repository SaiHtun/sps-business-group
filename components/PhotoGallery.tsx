import styled from "styled-components";
import Masonry from "react-masonry-css";

const PhotoGallery = ({images}) => {
  return (
    <MasonryWrapper>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, i) => {
          return (
            <MasonryImage
              src={image.fields.file.url}
              key={i}
              height="300"
            ></MasonryImage>
          );
        })}
      </Masonry>
    </MasonryWrapper>
  );
};

export default PhotoGallery;

const MasonryImage = styled.img<{ height: string }>`
  height: ${(props) => props.height};
  object-fit: contain;
`;

const MasonryWrapper = styled.div`
  margin-bottom: 100px;
  z-index: 10;
  overflow: hidden;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
