/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ImageURISource, ImageRequireSource } from "react-native";

export type Dimensions = {
  width: number;
  height: number;
};

export type Position = {
  x: number;
  y: number;
};
export interface Iimages {
  story_id?: number | string;
}

export interface IimageSrc {
  story_id?: number | string;
  uri: ImageURISource | ImageRequireSource;
  source: ImageURISource | ImageRequireSource;
  video: ImageURISource | ImageRequireSource;
  story_preview?: ImageURISource | ImageRequireSource;
  media_type?: string;
  // videoType: string;
  // video?: string;
  videoSize?: number;
  videoWidth?: number;
  videoHeight?: number;
  videoType?: string;
  assignee?: Array<any>;
  type?: string;
  date_added?: Date;
  date_created: Date;
  is_cover: boolean;
  fileName: string;
  fileSize: number;
  duration?: number;
  height?: number;
  width?: number;
  password?: string;
}

export type ImageSource = ImageURISource | ImageRequireSource;
