package com.test.mbti.api;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mbti")
public class MbtiController {
	private final MbtiService mMbtiService;

	/**
	 * 질문 리스트 가져오기
	 */
	@PostMapping("/getQuestionList")
	public ResponseEntity<List<Map<String, Object>>> getQuestionList(@RequestBody Map<String, Object> param) {
		return ResponseEntity.ok(mMbtiService.getQuestionList(param));
	}

	/**
	 * 답변 리스트 가져오기
	 */
	@PostMapping("/getAnswerList")
	public ResponseEntity<List<Map<String, Object>>> getAnswerList(@RequestBody Map<String, Object> param) {
		return ResponseEntity.ok(mMbtiService.getAnswerList(param));
	}

}