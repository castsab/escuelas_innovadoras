<?php

function links_block_contents() {
  $output = '';
  $output = theme('links_view',array('pid'=>1));
  return $output;
}
