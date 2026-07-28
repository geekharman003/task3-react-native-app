import { TextInput } from 'react-native'
import React from 'react'
import { SearchBarProps } from "../types/searchBar";

export default function Searchbar({ text, filterEmployees }: SearchBarProps) {
  return (
    <TextInput
      style={{
        width: 200,
        borderColor: "black",
        borderWidth: 1,
        outline: "none",
        padding: 5,
        borderRadius: 10,
      }}
      onChangeText={(text) => filterEmployees(text)}
      value={text}
    />
  );
}