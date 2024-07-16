import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";


export default function KeyboardAvoidingContainer({ children }: PropsWithChildren) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            {children}
        </KeyboardAvoidingView>
    )
}