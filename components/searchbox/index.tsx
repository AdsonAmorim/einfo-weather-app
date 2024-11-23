import React, { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDebounce } from "@/hooks";

interface SearchBoxProps {
  getData: (data: string) => void;
}

export function SearchBox({ getData }: SearchBoxProps) {
  const [searchText, setSearchText] = useState(""); // Estado para controlar o valor do input
  const inputRef = useRef<TextInput>(null); // Referência ao TextInput
  const debouncedValue = useDebounce<string>(searchText); // Valor com debounce para evitar chamadas contínuas

  // Atualiza os dados com o valor debounced
  useEffect(() => {
    getData(debouncedValue);
  }, [debouncedValue]);

  // Função para tratar alterações no texto
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
          flex: 1, // O input ocupa o máximo de espaço possível
          padding: 8,
          color: "#FFF",
          fontSize: 18,
        }}
        placeholder="Busque uma cidade"
        value={searchText} // Controlado pelo estado
        ref={inputRef}
        textAlign="left"
        returnKeyType="search"
        placeholderTextColor="#FFF"
        onChangeText={onChangeText} // Atualiza o estado com o valor digitado
        // onSubmitEditing={(data) => {
        //   getData(data.nativeEvent.text); // Busca com o texto final
        // }}
      />
      {searchText === "" ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            inputRef.current?.focus(); // Foca no input
          }}
        >
          <Ionicons name="search" size={24} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setSearchText(""); // Limpa o texto
            getData(""); // Reseta os dados buscados
          }}
        >
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}
