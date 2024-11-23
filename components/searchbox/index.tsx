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
    setSearchText(value ?? "");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        alignSelf: "flex-start",
        maxHeight: 42,
        borderColor: "#FFF",
        borderWidth: 1,
        paddingInline: 8,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          padding: 8,
          color: "#fff",
          fontSize: 18,
          borderRadius: 8,
        }}
        placeholder="Busque uma cidade"
        value={searchText}
        ref={inputRef}
        textAlign="center"
        returnKeyType="search"
        placeholderTextColor="#fFF"
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
          {/* <Icon as={Ionicons} size="md" name="search" color="light.text" /> */}
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
          {/* <Icon as={Ionicons} size="md" name="close" color="light.text" /> */}
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}
