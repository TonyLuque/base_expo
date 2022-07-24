import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppView from "../../components/AppView";
import TextMediumNormal from "../../components/font/TextMediumNormal";
import { GET_USER_BY_ID } from "../../graphql/queries/getUserById";
import { useToastError } from "../../hooks/useToastError";
import Context from "../../utils/Context";

const HomeScreen = () => {
  const { userData } = useContext(Context);

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId: userData.userId,
    },
  });

  if (loading)
    return (
      <AppView>
        <TextMediumNormal>Loading...</TextMediumNormal>
      </AppView>
    );

  if (error) {
    useToastError("Error get user data");
    console.error(error);
  }
  const {
    user: {
      data: { profile },
    },
  } = data;

  return (
    <AppView>
      {profile?.nickname ? (
        <TextMediumNormal>Hola {profile.nickname}</TextMediumNormal>
      ) : (
        <TextMediumNormal>
          Hola {profile.firstName} {profile.lastName}
        </TextMediumNormal>
      )}

      <TextMediumNormal>Inicio</TextMediumNormal>
    </AppView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
