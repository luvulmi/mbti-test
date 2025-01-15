package com.test.mbti.api;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MbtiMapper {

    /**
     * 질문 리스트 가져오기
     */
    List<Map<String, Object>> getQuestionList(Map<String, Object> param);

    /**
     * 답변 리스트 가져오기
     */
    List<Map<String, Object>> getAnswerList(Map<String, Object> param);

}