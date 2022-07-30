import { View, Text,  Alert } from 'react-native'
import React from 'react'

export default function Message({children}) {
  return  <Alert >{children}</Alert>
}