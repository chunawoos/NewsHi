package com.newha.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.newha.mapper.NewsMapper;
import com.newha.vo.HashTag;
import com.newha.vo.News;
import com.newha.vo.NewsImage;
import com.newha.vo.Post;
import com.newha.vo.PostTag;
import com.newha.vo.User;
import com.newha.vo.UserGoodNews;
import com.newha.vo.UserScrapNews;

@Repository
public class NewsDAOImpl implements NewsDAO {
	
	@Autowired
	NewsMapper mapper; 
	
	@Override
	public int insertNews(News news) {
		return mapper.insertNews(news);
	}
	
	@Override
	public int insertImages(ArrayList<NewsImage> images) {
		return mapper.insertImages(images);
	}
	
	@Override
	public List<News> selectByUrl(String url) {
		return mapper.selectByUrl(url);
	}
	
	@Override
	public int insertPost(Post post) {
		return mapper.insertPost(post);
	}
	
	@Override
	public List<Post> selectPostByName(String name) {
		return mapper.selectPostByName(name);
	}
	
	@Override
	public User selectUserById(String id) {
		return mapper.selectUserById(id);
	}
	
	@Override
	public int insertUserScrapNews(UserScrapNews post) {
		return mapper.insertUserScrapNews(post);
	}
	
	@Override
	public int insertHashTag(String tag) {
		return mapper.insertHashTag(tag);
	}
	
	@Override
	public List<UserScrapNews> selectUserScrapNewsByPostNo(String postNo) {
		return mapper.selectUserScrapNewsByPostNo(postNo);
	}
	
	@Override
	public List<HashTag> selectHashTagByName(String name) {
		return mapper.selectHashTagByName(name);
	}
	
	@Override
	public int insertPostTag(PostTag tag) {
		return mapper.insertPostTag(tag);
	}
	
	@Override
	public int deletePost(String postNo) {
		return mapper.deletePost(postNo);
	}
	
	@Override
	public int deleteScrap(String scarpNo) {
		return mapper.deleteScrap(scarpNo);
	}
	
	@Override
	public int updatePost(Post post) {
		return mapper.updatePost(post);
	}
	
	@Override
	public int updateScrap(UserScrapNews scrap) {
		return mapper.updateScrap(scrap);
	}
	
	@Override
	public List<Post> selectPostById(String id) {
		return mapper.selectPostById(id);
	}
	
	@Override
	public int increaseLike(String scrapNo) {
		return mapper.increaseLike(scrapNo);
	}
	
	@Override
	public int increaseDisLike(String scrapNo) {
		return mapper.increaseDisLike(scrapNo);
	}
	
	@Override
	public int decreaseLike(String scrapNo) {
		return mapper.decreaseLike(scrapNo);
	}
	
	@Override
	public int decreaseDisLike(String scrapNo) {
		return mapper.decreaseDisLike(scrapNo);
	}
	
	@Override
	public int updateLike(UserGoodNews userGoodNews) {
		return mapper.updateLike(userGoodNews);
	}
	
	@Override
	public int insertUserGoodNews(UserGoodNews userGoodNews) {
		return mapper.insertUserGoodNews(userGoodNews);
	}
	
	@Override
	public int updateDisLike(UserGoodNews userGoodNews) {
		return mapper.updateDisLike(userGoodNews);
	}
	
	@Override
	public int updateSave(UserGoodNews userGoodNews) {
		return mapper.updateSave(userGoodNews);
	}
	
	@Override
	public UserGoodNews selectLikeNews(UserGoodNews userGoodNews) {
		return mapper.selectLikeNews(userGoodNews);
	}
	
	@Override
	public UserGoodNews selectDisLikeNews(UserGoodNews userGoodNews) {
		return mapper.selectDisLikeNews(userGoodNews);
	}
}
