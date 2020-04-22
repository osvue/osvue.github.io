---
autoGroup-1: MYBATIS
title: Mybatis Plus
---

```java
  @Resource TUserMapper tUserMapper;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    QueryWrapper<TUser> queryWrapper = new QueryWrapper<>();
    queryWrapper.eq("username", username);
    TUser tUser = tUserMapper.selectOne(queryWrapper);
    return this.getOne(queryWrapper);
  }
```

