<?php
/*
	Beau West: Twitter Cache
	Copyright 2011: beau@west.gs
*/

class TwitterCache
{
	public $Options = array(
		'CacheInterval' => 24,
		'Path' => 'twitterCache.json',
		'twitterUrl' => 'https://twitter.com/statuses/user_timeline/',
		'twitterUrlFormat' => 'json',
		'twitterUrlOptions' => '?count=5&exclude_replies=1',
		'twitterUsername' => 'beaudesigns'
	);
	
	public function __construct() {

		if(!file_exists($this->Options['Path'])) {
			$this->FetchTwitterUpdate();
		} else {
			$LastAccess = filemtime($this->Options['Path']);
			
			if($LastAccess <= time() - 24) {
				$this->FetchTwitterUpdate();
			}
		}
		
		echo file_get_contents($this->Options['Path']);
		
	}
	
	private function FetchTwitterUpdate() {
		$URL = $this->Options['twitterUrl'] . $this->Options['twitterUsername'] . '.' . $this->Options['twitterUrlFormat'] . $this->Options['twitterUrlOptions'];

		$Handler = curl_init($URL);
		curl_setopt($Handler, CURLOPT_RETURNTRANSFER, TRUE);
		$Response = curl_exec($Handler);

		$this->SaveTwitterUpdate($Response);
	}
	
	private function SaveTwitterUpdate($Update) {
		file_put_contents($this->Options['Path'], $Update);
	}

}

new TwitterCache();