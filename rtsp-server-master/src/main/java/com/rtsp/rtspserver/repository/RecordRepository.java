package com.rtsp.rtspserver.repository;
import com.rtsp.rtspserver.model.Recorder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
@Repository
public class RecordRepository {

        private Connection conn;

        public RecordRepository() throws SQLException {
            this.conn = DatabaseConnection.getConnection();
        }

        public Recorder getRecordById(int recordId) {
            String sql = "SELECT * FROM Records WHERE record_id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1, recordId);
                ResultSet rs = pstmt.executeQuery();
                if (rs.next()) {
                    return new Recorder(rs.getInt("record_id"),
                            rs.getInt("camera_id"),
                            rs.getTimestamp("start_time"),
                            rs.getTimestamp("end_time"));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return null;
        }

        public List<Recorder> getAllRecords() {
            List<Recorder> records = new ArrayList<>();
            String sql = "SELECT * FROM Records";
            try (PreparedStatement pstmt = conn.prepareStatement(sql);
                 ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    Recorder record = new Recorder(rs.getInt("record_id"),
                            rs.getInt("camera_id"),
                            rs.getTimestamp("start_time"),
                            rs.getTimestamp("end_time"));
                    records.add(record);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return records;
        }

        public void addRecord(Recorder record) {
            String sql = "INSERT INTO Records (camera_id, start_time, end_time) VALUES (?, ?, ?)";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1, record.getCameraId());
                pstmt.setTimestamp(2, record.getStartTime());
                pstmt.setTimestamp(3, record.getEndTime());
                pstmt.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        public boolean updateRecord(Recorder record) {
            String sql = "UPDATE Records SET camera_id = ?, start_time = ?, end_time = ? WHERE record_id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1, record.getCameraId());
                pstmt.setTimestamp(2, record.getStartTime());
                pstmt.setTimestamp(3, record.getEndTime());
                pstmt.setInt(4, record.getRecordId());
                int affectedRows = pstmt.executeUpdate();
                return affectedRows > 0;
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return false;
        }

        public boolean deleteRecord(int recordId) {
            String sql = "DELETE FROM Records WHERE record_id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setInt(1, recordId);
                int affectedRows = pstmt.executeUpdate();
                return affectedRows > 0;
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return false;
        }
}
