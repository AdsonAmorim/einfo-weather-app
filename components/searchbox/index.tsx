import React, { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDebounce } from "@/hooks";

interface SearchBoxProps {
  getData: (data: string) => void;
}

export function SearchBox({ getData }: SearchBoxProps) {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<TextInput>(null);
  const debouncedValue = useDebounce<string>(searchText);

  useEffect(() => {
    getData(debouncedValue);
  }, [debouncedValue]);

  const onChangeText = (value: string) => {
    setSearchText(value);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        maxHeight: 42,
        borderColor: "#FFF",
        borderWidth: 1,
        paddingHorizontal: 8,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 8,
          color: "#FFF",
          fontSize: 18,
        }}
        placeholder="Busque uma cidade"
        value={searchText}
        ref={inputRef}
        textAlign="left"
        returnKeyType="search"
        placeholderTextColor="#FFF"
        onChangeText={onChangeText}
        onSubmitEditing={(data) => {
          getData(data.nativeEvent.text);
        }}
      />
      {searchText === "" ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            inputRef.current?.focus();
          }}
        >
          <Ionicons name="search" size={24} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setSearchText("");
            getData("");
          }}
        >
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}
