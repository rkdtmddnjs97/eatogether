import * as React from "react";
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from "@mui/base/FormControlUnstyled";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import clsx from "clsx";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  }
  `
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);
  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);
  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }
  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;


  return (
    <p
      style={LabelStyle}
      className={clsx(className, error || showRequiredError ? "invalid" : "")}
    >
      {children}
    </p>
  );

})`
font-family: IBM Plex Sans, sans-serif;
font-size: 0.875rem;
margin-bottom: 4px;
&.invalid {
  color: red;
}
`;
const HelperText = styled((props) => {
const formControlContext = useFormControlUnstyledContext();
const [dirty, setDirty] = React.useState(false);
React.useEffect(() => {
  if (formControlContext?.filled) {
    setDirty(true);
  }
}, [formControlContext]);
if (formControlContext === undefined) {
  return null;
}
const { required, filled } = formControlContext;
const showRequiredError = dirty && required && !filled;
return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
font-family: IBM Plex Sans, sans-serif;
font-size: 0.875rem;
`;

const WrapStyle = {
  display: "flex",
  paddingLeft: "20px",
  marginTop: "10px",
};

const LabelStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const InputStyle = {
  fontSize: "20px",
  borderRadius: "5px",
  marginRight: "10px",
};
const btnStyle = {
  marginLeft: "10px",
  backgroundColor: "#787878",
  padding: "10px 10px",
  borderRadius: "5px",
  color: "white",
};

export default function UseFormControl({ label, divShow }) {
  const [open, setOpen] = React.useState("none"); //open: "block", close: "none"

  const Input_click = () => {
    if (divShow == "block") {
      setOpen("block");
    }
  };

  const btn_click = (e) => {
    let MenuItem = document.createElement("p");
    MenuItem.style.fontSize = "15px";

    let ChildList = e.target.parentElement.children;

    if (ChildList[1].value != "" && ChildList[1].value != "") {
      MenuItem.innerHTML =
        e.target.parentElement.children[1].value +
        ":" +
        e.target.parentElement.children[2].value +
        "???";
      e.target.parentElement.appendChild(MenuItem);
    } else {
      Window.alert("?????? ????????? ????????? ??????????????????");
    }
    //?????????

    ChildList[1].value = "";
    ChildList[2].value = "";
  };
  const handlingInput = () => {
    if (label === "??????????????????") {
      return <Input onClick={Input_click} type="date" />;
    } else if (label === "??????????????????") {
      return <Input onClick={Input_click} type="time" />;
    } else {
      return <Input onClick={Input_click} />;
    }
  };

  return (
    <>

<FormControlUnstyled style={WrapStyle} defaultValue="" required>
        <Label style={LabelStyle}>{label}</Label>
        {handlingInput()}
        <HelperText />
      </FormControlUnstyled>
      <div style={{ display: `${open}` }}>
        <p>?????? ??????</p>
        <input style={InputStyle} placeholder="?????? ??????" />
        <input style={InputStyle} placeholder="??????" />
        <button style={btnStyle} onClick={btn_click}>
          ??????
        </button>
      </div>
    </>
  );
}