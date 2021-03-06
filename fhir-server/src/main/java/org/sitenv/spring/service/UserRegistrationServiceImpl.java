package org.sitenv.spring.service;

import org.sitenv.spring.dao.UserRegistrationDao;
import org.sitenv.spring.model.DafUserRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.util.HashMap;

@Service("userRegistrationService")
@Transactional
public class UserRegistrationServiceImpl implements UserRegistrationService {

    @Autowired
    private UserRegistrationDao userDao;

    @Override
    public String registerUser(DafUserRegister user) {
        return userDao.register(user);
    }

    public String updateUser(DafUserRegister user) {
        return userDao.updateUser(user);
    }

    @Override
    public DafUserRegister getUserById(Integer id) {
        return userDao.getUserById(id);
    }

    @Override
    public DafUserRegister getUserByDetails(String userName, String password, HttpServletRequest request) throws Exception {

        DafUserRegister user = userDao.getUserByDetails(userName, password);

        HashMap<String, Integer> sessionMap = new HashMap<String, Integer>();
        long time = System.currentTimeMillis() + (2*60 * 60 * 1000); // 4 * 60 * 60 * 1000 3600 seconds times 1000 milliseconds(1 hour)

        Integer expiryTime = (int) (time / 1000L);
        sessionMap.put("expiry", expiryTime);
        if (user != null) {
            HttpSession session = request.getSession();
            session.setAttribute("user" + user.getUser_id(), sessionMap);
        }

        return user;
    }
    
    @Override
	public DafUserRegister getUserByEmail(String email) {
		return userDao.getUserByEmail(email);
	}

    @Override
	public DafUserRegister updateTempPassword(String tempPassword, String email) {
		return userDao.updateTempPassword(tempPassword, email);
	}
	
	@Override
	public String changeUserPassword(String userName, String password, String oldPassword) {
		System.out.println();
		return userDao.changeUserPassword(userName, password, oldPassword);
	}

	@Override
	public String updateUserPassword(String userName, String password, String oldPassword) {
		return userDao.updateUserPassword(userName, password, oldPassword);
		
	}

	
    

}
