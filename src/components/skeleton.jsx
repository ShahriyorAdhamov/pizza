import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="286" rx="0" ry="0" width="255" height="72" /> 
    <rect x="6" y="401" rx="0" ry="0" width="146" height="33" /> 
    <rect x="183" y="397" rx="10" ry="10" width="73" height="48" />
  </ContentLoader>
)

export default Skeleton