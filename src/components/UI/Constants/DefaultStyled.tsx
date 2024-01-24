import CSS from "csstype";

export const TestImagePath = "/images/umbreon.png";

export const defaultButtonStyle: CSS.Properties = {
  transitionDuration: "400ms",
  color: "#03002E",
  backgroundColor: "white",
  fontFamily: "sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  border: "3px solid #272727",
  borderRadius: "5px",
  padding: "10px",
  width: "150px",
  height: "50px",
  margin: "10px",
  lineHeight: "2",
  display: "inline",
  position: "relative",
  textDecoration: "none",
  cursor: "pointer",
  zIndex: 0,
};

export const defaultImageStyle: CSS.Properties = {
  width: "100%",
  transitionDuration: "400ms",
  position: "absolute",
  top: 0,
  left: 0,
};

export const defaultImageContainerStyle: CSS.Properties = {
  width: "400px",
  height: "200px",
  position: "relative",
  overflow: "hidden",
  margin: "20px",
  display: "inline-block",
  transitionDuration: "400ms",
  zIndex: 0,
};

export const defaultImageCaptionStyle: CSS.Properties = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  transitionDuration: "400ms",
  zIndex: 0,
};

export const defaultMenuUnorderedListStyle: CSS.Properties = {
  padding: 0,
  margin: "20px",
  display: "flex",
  flexWrap: "wrap",
  transitionDuration: "400ms",
};

export const defaultMenuListItemStyle: CSS.Properties = {
  listStyle: "none",
  transitionDuration: "400ms",
  margin: "10px",
};

export const defaultMenuAnchorStyle: CSS.Properties = {
  textDecoration: "none",
  color: "#3d3d3d",
  fontSize: "22px",
  display: "block",
  padding: "10px 15px",
  position: "relative",
  transitionDuration: "400ms",
  margin: "10px",
  fontWeight: 600,
};
