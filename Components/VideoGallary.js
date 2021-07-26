import React, { useState, useRef } from "react";

import YoutubePlayer from "react-native-youtube-iframe";
import { SafeAreaView, ScrollView } from "react-native";

function VideoGallary() {
  return (
    <SafeAreaView>
      <ScrollView>
        <YoutubePlayer
          height={300}
          play={false}
          mute={false}
          videoId={"obLuDQUEFGU"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default VideoGallary;
