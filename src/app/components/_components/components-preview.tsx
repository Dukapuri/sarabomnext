"use client";

import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    Box,
    Stack,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import { useState } from "react";

export function ComponentsPreview() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        message: "",
        agree: false,
        option: "",
        select: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("폼 제출: " + JSON.stringify(formData, null, 2));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value =
            target.type === "checkbox"
                ? (target as HTMLInputElement).checked
                : target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const target = e.target;
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                p: 4,
            }}
        >
            <Box sx={{ maxWidth: 1280, mx: "auto" }}>
                <Stack spacing={6}>
                    {/* 헤더 */}
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            UI 컴포넌트 미리보기
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            버튼, 폼, 카드 등 다양한 UI 컴포넌트를 확인할 수
                            있습니다
                        </Typography>
                    </Box>

                    {/* 버튼 섹션 */}
                    <Card>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                버튼 (Button)
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                            >
                                다양한 스타일과 크기의 버튼 컴포넌트
                            </Typography>

                            <Stack spacing={4} sx={{ mt: 3 }}>
                                {/* Variants */}
                                <Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="semibold"
                                        gutterBottom
                                    >
                                        Variants
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        flexWrap="wrap"
                                    >
                                        <Button variant="contained">
                                            Contained
                                        </Button>
                                        <Button variant="outlined">
                                            Outlined
                                        </Button>
                                        <Button variant="text">Text</Button>
                                    </Stack>
                                </Box>

                                {/* Sizes */}
                                <Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="semibold"
                                        gutterBottom
                                    >
                                        Sizes
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        flexWrap="wrap"
                                    >
                                        <Button size="small">Small</Button>
                                        <Button size="medium">Medium</Button>
                                        <Button size="large">Large</Button>
                                    </Stack>
                                </Box>

                                {/* States */}
                                <Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight="semibold"
                                        gutterBottom
                                    >
                                        States
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        flexWrap="wrap"
                                    >
                                        <Button variant="contained">
                                            Normal
                                        </Button>
                                        <Button variant="contained" disabled>
                                            Disabled
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* 폼 섹션 */}
                    <Card>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                폼 (Form)
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                            >
                                다양한 입력 필드와 폼 요소들
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    mt: 3,
                                }}
                            >
                                <TextField
                                    name="name"
                                    label="이름"
                                    placeholder="이름을 입력하세요"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                <TextField
                                    name="email"
                                    type="email"
                                    label="이메일"
                                    placeholder="이메일을 입력하세요"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                <TextField
                                    name="password"
                                    type="password"
                                    label="비밀번호"
                                    placeholder="비밀번호를 입력하세요"
                                    value={formData.password}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                <TextField
                                    name="message"
                                    label="메시지"
                                    placeholder="메시지를 입력하세요"
                                    value={formData.message}
                                    onChange={handleTextAreaChange}
                                    multiline
                                    rows={4}
                                    fullWidth
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                        />
                                    }
                                    label="이용약관에 동의합니다"
                                />

                                <FormControl>
                                    <Typography
                                        variant="body2"
                                        fontWeight="medium"
                                        gutterBottom
                                    >
                                        옵션 선택
                                    </Typography>
                                    <RadioGroup
                                        name="option"
                                        value={formData.option}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                option: e.target.value,
                                            })
                                        }
                                    >
                                        <FormControlLabel
                                            value="option1"
                                            control={<Radio />}
                                            label="옵션 1"
                                        />
                                        <FormControlLabel
                                            value="option2"
                                            control={<Radio />}
                                            label="옵션 2"
                                        />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel>선택</InputLabel>
                                    <Select
                                        name="select"
                                        value={formData.select}
                                        label="선택"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                select: e.target.value,
                                            })
                                        }
                                    >
                                        <MenuItem value="">선택하세요</MenuItem>
                                        <MenuItem value="option1">
                                            옵션 1
                                        </MenuItem>
                                        <MenuItem value="option2">
                                            옵션 2
                                        </MenuItem>
                                        <MenuItem value="option3">
                                            옵션 3
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <Stack direction="row" spacing={2}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                    >
                                        제출
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* 카드 섹션 */}
                    <Card>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                카드 (Card)
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                            >
                                카드 컴포넌트의 다양한 사용 예시
                            </Typography>

                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={2}
                                sx={{ mt: 2 }}
                            >
                                {/* 기본 카드 */}
                                <Box sx={{ flex: 1 }}>
                                    <Card>
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                기본 카드
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                기본 카드 컴포넌트입니다
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                카드 내용이 여기에 표시됩니다.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>

                                {/* 푸터가 있는 카드 */}
                                <Box sx={{ flex: 1 }}>
                                    <Card>
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                푸터 카드
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                푸터가 있는 카드입니다
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                카드 내용입니다.
                                            </Typography>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                            >
                                                액션
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Box>

                                {/* 이미지가 있는 카드 */}
                                <Box sx={{ flex: 1 }}>
                                    <Card>
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                이미지 카드
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                이미지가 포함된 카드입니다
                                            </Typography>
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: 128,
                                                    background:
                                                        "linear-gradient(to bottom right, #e7e5e4, #d6d3d1)",
                                                    borderRadius: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    mt: 2,
                                                }}
                                            >
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    이미지 영역
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* 입력 필드 섹션 */}
                    <Card>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                입력 필드 (Input)
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                gutterBottom
                            >
                                다양한 타입의 입력 필드
                            </Typography>

                            <Stack spacing={3} sx={{ mt: 2 }}>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={3}
                                >
                                    <TextField
                                        type="text"
                                        label="텍스트"
                                        placeholder="텍스트 입력"
                                        fullWidth
                                    />
                                    <TextField
                                        type="email"
                                        label="이메일"
                                        placeholder="이메일 입력"
                                        fullWidth
                                    />
                                </Stack>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={3}
                                >
                                    <TextField
                                        type="password"
                                        label="비밀번호"
                                        placeholder="비밀번호 입력"
                                        fullWidth
                                    />
                                    <TextField
                                        type="number"
                                        label="숫자"
                                        placeholder="숫자 입력"
                                        fullWidth
                                    />
                                </Stack>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={3}
                                >
                                    <TextField
                                        type="date"
                                        label="날짜"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                    />
                                    <TextField
                                        type="time"
                                        label="시간"
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                    />
                                </Stack>
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={3}
                                >
                                    <TextField
                                        type="text"
                                        label="비활성화"
                                        placeholder="비활성화된 입력"
                                        disabled
                                        fullWidth
                                    />
                                    <TextField
                                        type="text"
                                        label="읽기 전용"
                                        value="읽기 전용 값"
                                        InputProps={{ readOnly: true }}
                                        fullWidth
                                    />
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Box>
    );
}
