package com.test.mbti.api;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional
public class MbtiService {
	
    private final MbtiMapper mMbtiMapper;

    /**
     * 질문 리스트 가져오기
     */
    public List<Map<String, Object>> getQuestionList(Map<String, Object> param) {
        return mMbtiMapper.getQuestionList(param);
    }

    /**
     * 답변 리스트 가져오기
     */
    public List<Map<String, Object>> getAnswerList(Map<String, Object> param) {
        return mMbtiMapper.getAnswerList(param);
    }

}