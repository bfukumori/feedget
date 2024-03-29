import { ArrowLeft } from 'phosphor-react-native';
import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../Screenshot';
import { FeedbackType } from '../Widget';
import {captureScreen} from 'react-native-view-shot';
import { styles } from './styles';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: ()=> void;
  onFeedbackSent: ()=> void;
}

export function Form({feedbackType, onFeedbackCanceled, onFeedbackSent}:Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setSendingFeedback] = useState(false);
  const [comment, setComment] = useState('');
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri=>setScreenshot(uri))
    .catch(error=>console.log(error))
  }

  function handleScreenshotRemove() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return
    }
    setSendingFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot,{encoding:'base64'})

    try {
     await api.post('feedbacks', {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`
      })
      onFeedbackSent();
    } catch(error) {
      console.log();
      setSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image}/>
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        value={comment}
        onChangeText={(comment)=>setComment(comment)}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          ontakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback}/>
      </View>
    </View>
  );
}