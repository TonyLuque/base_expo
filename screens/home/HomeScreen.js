import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import { GET_USERS } from "../../graphql/queries/getUsers";

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading)
    return (
      <AppView>
        <TextMediumNormal>Loading...</TextMediumNormal>
      </AppView>
    );
  if (error)
    return (
      <AppView>
        <TextMediumNormal>Error! ${error.message}</TextMediumNormal>
      </AppView>
    );
  //console.log(data);

  return (
    <AppView>
      <TextMediumNormal>Inicio</TextMediumNormal>
    </AppView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
