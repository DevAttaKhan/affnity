const CrossIcon = ({className, color, width, height}) => {
    return (
        <svg className={`feather feather-x ${className || ""}`}  xmlns="http://www.w3.org/2000/svg"
             width={width ? width : "24"}
             height={height ? height : "24"}
             viewBox="0 0 24 24" fill="none"
             stroke={color ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    )
}
export default CrossIcon;