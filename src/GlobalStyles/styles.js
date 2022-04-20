import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";
import { getColor } from "./Colors";

export const Link = styled(DefaultLink)`
  color: ${(props) => getColor(props.color || "foreground")};
  text-decoration: none;
`;

export const Text = styled.span`
  color: ${(props) => getColor(props.color || "foreground")};
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
`;

export const Input = styled.input`
  all: unset;
  max-width: 90%;
  background-color: ${(props) => getColor(props.background || "card")};
  border-radius: 10px;
  border: 1px solid white;
  display: block;
  padding: 10px;
  margin: ${(props) => props.margin};
  width: 100%;
`;

export const Select = styled.select`
  all: unset;
  max-width: 90%;
  background-color: ${(props) => getColor(props.background || "card")};
  border-radius: 10px;
  border: 1px solid white;
  display: block;
  padding: 10px;
  margin: ${(props) => props.margin};
  width: 100%;
`;