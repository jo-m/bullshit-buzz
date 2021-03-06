/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var initAnimatePanel = require('./animatepanel').initAnimatePanel;
var initShowTab = require('./showtab').initShowTab;
var initDragDrop = require('./dragdrop').initDragDrop;
var initPlaySample = require('./playsample').initPlaySample;
var initRecordButton = require('./recordbutton').initRecordButton;
var initFileUpload = require('./fileupload').initFileUpload;
var displaymetadata = require('./displaymetadata');

exports.initViews = function(ctx) {
  console.log('Initializing views...');
  initPlaySample(ctx);
  initDragDrop(ctx);
  initRecordButton(ctx);
  initFileUpload(ctx);
  initShowTab();
  initAnimatePanel();
  initShowTab();
  displaymetadata.initDisplayMetadata();

  displaymetadata.addKeyWord("big data");
  displaymetadata.addKeyWord("internet of things");
  displaymetadata.addKeyWord("fin tech");
  displaymetadata.addKeyWord("fintech");
  displaymetadata.addKeyWord("block chain");
  displaymetadata.addKeyWord("blockchain");
  displaymetadata.addKeyWord("bitcoin");
  displaymetadata.addKeyWord("cloud");
  displaymetadata.addKeyWord("data mining");
  displaymetadata.addKeyWord("data science");
  displaymetadata.addKeyWord("real time");
  displaymetadata.addKeyWord("neural network");
  displaymetadata.addKeyWord("artificial intelligence");
  displaymetadata.addKeyWord("sustainable");
  displaymetadata.addKeyWord("hackers");
  displaymetadata.addKeyWord("low latency");
  displaymetadata.addKeyWord("native");
  displaymetadata.addKeyWord("rock star");
  displaymetadata.addKeyWord("innovation");
  displaymetadata.addKeyWord("deep learning");
  displaymetadata.addKeyWord("rocket");
  displaymetadata.addKeyWord("entrepreneur");
  displaymetadata.addKeyWord("disruptive");
  displaymetadata.addKeyWord("added value");
  displaymetadata.addKeyWord("value adding");
  displaymetadata.addKeyWord("out of the box");
};
