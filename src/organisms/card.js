import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../config";

const StyledView = styled.View`
  background-color: ${COLORS.primary};
  border-radius: 10px;
  border: 1px solid gray;
  padding: 10px 10px;
  min-height: 100px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledText = styled.Text`
  color: ${COLORS.secondary};
  font-size: 3rem;
  font-weight: bold;
  line-height: none;
  user-select: none;
`;

const Card = {
  Note: ({ color, onPress, ...props }) => {
    return (
      <StyledView onPress={onPress} {...props}>
        <StyledText>Notes</StyledText>
      </StyledView>
    );
  },
};

export default Card;
